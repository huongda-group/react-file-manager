export const dateStringValidator = (
  props: { [key: string]: any },
  propName: string,
  componentName: string
): Error | undefined | null => {
  const value = props[propName];

  if (value && isNaN(Date.parse(value))) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a valid date string (ISO 8601) but received \`${value}\`.`
    );
  }
  return null;
};

export const urlValidator = (
  props: { [key: string]: any },
  propName: string,
  componentName: string
): Error | undefined | null => {
  const url = props[propName];

  try {
    if (url) {
      new URL(url);
    }
    return null;
  } catch (error) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a valid URL but received \`${url}\`.`
    );
  }
};
