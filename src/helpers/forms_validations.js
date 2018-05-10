export const checkPassword = string => {
  let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$");
  return regex.test(string);
};

export const checkEmail = string => {
  const regex = new RegExp("/[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[A-Za-z]");
  return regex.test(string);
};

export const textareaLineBreaks = string => {
  return string.replace(/\r?\n/g, "<br />");
};

export const textareaWordCountCheck = string => {
  const wordCount = string.replace(/\s/g, "").length;
  console.log("WORD COUNT: ", wordCount);
  return wordCount > 2
    ? "The word count in your biography must not be greater that 250."
    : "";
};
