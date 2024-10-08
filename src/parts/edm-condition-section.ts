export const getConditionPart = (num?: string) => {
  if (!num) {
    return `ยังไม่ได้ใส่`
  }
  return `${num}`;
};
