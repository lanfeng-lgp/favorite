function calculateLoveTime(time = '2023-01-25 20:34:00') {
  const birth = new Date(time);
  const now = new Date();
  // 计算时间差，单位为毫秒
  const diff = now - birth;
  // 计算天数
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // 计算剩余的毫秒数
  const remainingMs = diff % (1000 * 60 * 60 * 24);
  // 计算小时数
  const hours = Math.floor(remainingMs / (1000 * 60 * 60));
  // 计算剩余的毫秒数
  const remainingMsAfterHours = remainingMs % (1000 * 60 * 60);
  // 计算分钟数
  const minutes = Math.floor(remainingMsAfterHours / (1000 * 60));
  // 计算剩余的毫秒数
  const remainingMsAfterMinutes = remainingMsAfterHours % (1000 * 60);
  // 计算秒数
  const seconds = Math.floor(remainingMsAfterMinutes / 1000);
  
  return {days, hours, minutes, seconds}
}