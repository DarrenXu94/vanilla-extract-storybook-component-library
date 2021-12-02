export const joinClassNames = (...classes: Array<string | boolean | undefined>) => classes.filter((element) => typeof element === 'string').join(' ');
