const currentWorkingDirectory = Deno.cwd();

export type FileJobFunction<T = void> = (path: string) => Promise<T>;

/**
 * 批处理目录下的文件
 * @param dir 目录
 * @param task 处理脚本
 */
export async function pipeDirTask(dir: string, task: FileJobFunction) {
  try {
    const dirInfo = Deno.statSync(dir);
    if (dirInfo.isDirectory) {
      for (const dirEntry of Deno.readDirSync(dir)) {
        await pipeDirTask(dir.concat(`/${dirEntry.name}`), task);
      }
    } else {
      await task(dir);
    }
  } catch (e) {
    console.error(e.message, dir);
  }
}

/**
 * 格式化文件
 * @param filePath
 */
export async function formatFile<FileJobFunction>(filePath: string) {
  const p = Deno.run({
    cmd: ["deno", "fmt", filePath],
  });
  await p.status();
}

async function main() {
  console.log(currentWorkingDirectory);
  await pipeDirTask(currentWorkingDirectory, formatFile);
}

await main();
