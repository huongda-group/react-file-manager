import { useState } from "react";
import Button from "../../../components/button/button";
import { useSelection } from "../../../contexts/selection";
import { useTranslation } from "../../../contexts/translation";
import { IUseTriggerActionReturn } from "../../../hooks/use-trigger-action";
import { IFile } from "../../../types";
import "./chmod.css";

interface ChmodActionProps {
  triggerAction: IUseTriggerActionReturn;
  onChmod: (files: IFile[], permissions: string) => void;
}

interface IPermissionState {
  owner: { read: boolean; write: boolean; execute: boolean };
  group: { read: boolean; write: boolean; execute: boolean };
  others: { read: boolean; write: boolean; execute: boolean };
}

const ChmodAction: React.FC<ChmodActionProps> = ({ triggerAction, onChmod }) => {
  const { selectedFiles } = useSelection();
  const t = useTranslation();

  const [permissions, setPermissions] = useState<IPermissionState>({
    owner: { read: true, write: true, execute: false },
    group: { read: true, write: false, execute: false },
    others: { read: true, write: false, execute: false },
  });

  const [octalValue, setOctalValue] = useState("644");

  const calculateOctal = (perm: { read: boolean; write: boolean; execute: boolean }) => {
    return (perm.read ? 4 : 0) + (perm.write ? 2 : 0) + (perm.execute ? 1 : 0);
  };

  const updateOctalFromPerms = (perms: IPermissionState) => {
    const newVal = `${calculateOctal(perms.owner)}${calculateOctal(perms.group)}${calculateOctal(perms.others)}`;
    setOctalValue(newVal);
  };

  const updatePermsFromOctal = (val: string) => {
    if (!/^[0-7]{0,3}$/.test(val)) return;

    const perms = { ...permissions };
    const roles: (keyof IPermissionState)[] = ["owner", "group", "others"];

    for (let i = 0; i < 3; i++) {
      const num = parseInt(val[i] || "0");
      const role = roles[i];
      perms[role] = {
        read: !!(num & 4),
        write: !!(num & 2),
        execute: !!(num & 1),
      };
    }
    setPermissions(perms);
  };

  const handleChange = (role: keyof IPermissionState, perm: "read" | "write" | "execute") => {
    const newPerms = {
      ...permissions,
      [role]: { ...permissions[role], [perm]: !permissions[role][perm] },
    };
    setPermissions(newPerms);
    updateOctalFromPerms(newPerms);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length <= 3 && /^[0-7]*$/.test(val)) {
      setOctalValue(val);
      if (val.length === 3) {
        updatePermsFromOctal(val);
      }
    }
  };

  const handleApply = () => {
    const finalOctal = octalValue.padStart(3, "0");
    onChmod(selectedFiles, finalOctal);
    triggerAction.close();
  };

  const roles: (keyof IPermissionState)[] = ["owner", "group", "others"];
  const perms: ("read" | "write" | "execute")[] = ["read", "write", "execute"];

  return (
    <div className="fm-chmod-container">
      <table className="fm-chmod-table">
        <thead>
          <tr>
            <th></th>
            <th>{t("read")}</th>
            <th>{t("write")}</th>
            <th>{t("execute")}</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role}>
              <td>{t(role)}</td>
              {perms.map((perm) => (
                <td key={perm}>
                  <input
                    type="checkbox"
                    className="fm-chmod-checkbox"
                    checked={permissions[role][perm]}
                    onChange={() => handleChange(role, perm)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="fm-chmod-preview">
        <span className="fm-chmod-preview-label">{t("permission")}</span>
        <input
          type="text"
          className="fm-chmod-input"
          value={octalValue}
          onChange={handleInputChange}
          maxLength={3}
          placeholder="000"
        />
      </div>

      <div className="fm-chmod-action">
        <Button type="secondary" onClick={triggerAction.close}>
          {t("cancel")}
        </Button>
        <Button type="primary" onClick={handleApply}>
          {t("apply")}
        </Button>
      </div>
    </div>
  );
};

export default ChmodAction;
