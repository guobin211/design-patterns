/**
 * leet_code_873.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
/**
 * 打开转盘锁 每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
 * @param deadends = ["0201","0101","0102","1212","2002"],
 * @param target = "0202"
 * return 6
 */
function openLock(deadends: string[], target: string): number {
  let minStep = 0;
  let currentStep = 0;
  for (let i = 0; i < 10; i++) {
    currentStep++;
    for (let j = 0; j < 10; j++) {
      currentStep++;
      for (let k = 0; k < 10; k++) {
        currentStep++;
        for (let l = 0; l < 10; l++) {
          currentStep++;
          const str = `${i}${j}${k}${l}`;
          if (!deadends.includes(str) && str === target) {
            if (currentStep === 4) {
              return 4;
            }
            if (minStep === 0 || minStep > currentStep) {
              minStep = currentStep;
            }
            currentStep = 0;
          }
        }
      }
    }
  }
  return minStep === 0 ? minStep : -1;
}
