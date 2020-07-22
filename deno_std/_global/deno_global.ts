// {
//   Buffer: [Function: Buffer],
//   readAll: [AsyncFunction: readAll],
//   readAllSync: [Function: readAllSync],
//   writeAll: [AsyncFunction: writeAll],
//   writeAllSync: [Function: writeAllSync],
//   build: {
//     target: "x86_64-apple-darwin",
//     arch: "x86_64",
//     os: "darwin",
//     vendor: "apple",
//     env: undefined
//   },
//   chmodSync: [Function: chmodSync],
//   chmod: [AsyncFunction: chmod],
//   chownSync: [Function: chownSync],
//   chown: [AsyncFunction: chown],
//   customInspect: Symbol(Deno.symbols.customInspect),
//   inspect: [Function: inspect],
//   copyFileSync: [Function: copyFileSync],
//   copyFile: [AsyncFunction: copyFile],
//   chdir: [Function: chdir],
//   cwd: [Function: cwd],
//   errors: {
//     NotFound: [Function: NotFound],
//     PermissionDenied: [Function: PermissionDenied],
//     ConnectionRefused: [Function: ConnectionRefused],
//     ConnectionReset: [Function: ConnectionReset],
//     ConnectionAborted: [Function: ConnectionAborted],
//     NotConnected: [Function: NotConnected],
//     AddrInUse: [Function: AddrInUse],
//     AddrNotAvailable: [Function: AddrNotAvailable],
//     BrokenPipe: [Function: BrokenPipe],
//     AlreadyExists: [Function: AlreadyExists],
//     InvalidData: [Function: InvalidData],
//     TimedOut: [Function: TimedOut],
//     Interrupted: [Function: Interrupted],
//     WriteZero: [Function: WriteZero],
//     UnexpectedEof: [Function: UnexpectedEof],
//     BadResource: [Function: BadResource],
//     Http: [Function: Http],
//     Busy: [Function: Busy]
//   },
//   File: [Function: File],
//   open: [AsyncFunction: open],
//   openSync: [Function: openSync],
//   create: [Function: create],
//   createSync: [Function: createSync],
//   stdin: Stdin { rid: 0 },
//   stdout: Stdout { rid: 1 },
//   stderr: Stderr { rid: 2 },
//   seek: [Function: seek],
//   seekSync: [Function: seekSync],
//   read: [AsyncFunction: read],
//   readSync: [Function: readSync],
//   write: [AsyncFunction: write],
//   writeSync: [Function: writeSync],
//   watchFs: [Function: watchFs],
//   internal: Symbol(Deno.internal),
//   copy: [AsyncFunction: copy],
//   iter: [AsyncGeneratorFunction: iter],
//   iterSync: [GeneratorFunction: iterSync],
//   SeekMode: { 0: "Start", 1: "Current", 2: "End", Start: 0, Current: 1, End: 2 },
//   makeTempDirSync: [Function: makeTempDirSync],
//   makeTempDir: [Function: makeTempDir],
//   makeTempFileSync: [Function: makeTempFileSync],
//   makeTempFile: [Function: makeTempFile],
//   metrics: [Function: metrics],
//   mkdirSync: [Function: mkdirSync],
//   mkdir: [AsyncFunction: mkdir],
//   connect: [AsyncFunction: connect],
//   listen: [Function: listen],
//   env: {
//     get: [Function: getEnv],
//     toObject: [Function: toObject],
//     set: [Function: setEnv],
//     delete: [Function: deleteEnv]
//   },
//   exit: [Function: exit],
//   execPath: [Function: execPath],
//   run: [Function: run],
//   Process: [Function: Process],
//   readDirSync: [Function: readDirSync],
//   readDir: [Function: readDir],
//   readFileSync: [Function: readFileSync],
//   readFile: [AsyncFunction: readFile],
//   readTextFileSync: [Function: readTextFileSync],
//   readTextFile: [AsyncFunction: readTextFile],
//   readLinkSync: [Function: readLinkSync],
//   readLink: [Function: readLink],
//   realPathSync: [Function: realPathSync],
//   realPath: [Function: realPath],
//   removeSync: [Function: removeSync],
//   remove: [AsyncFunction: remove],
//   renameSync: [Function: renameSync],
//   rename: [AsyncFunction: rename],
//   resources: [Function: resources],
//   close: [Function: close],
//   statSync: [Function: statSync],
//   lstatSync: [Function: lstatSync],
//   stat: [AsyncFunction: stat],
//   lstat: [AsyncFunction: lstat],
//   connectTls: [AsyncFunction: connectTls],
//   listenTls: [Function: listenTls],
//   truncateSync: [Function: truncateSync],
//   truncate: [AsyncFunction: truncate],
//   isatty: [Function: isatty],
//   version: { deno: "1.1.3", v8: "8.5.216", typescript: "3.9.2" },
//   writeFileSync: [Function: writeFileSync],
//   writeFile: [AsyncFunction: writeFile],
//   writeTextFileSync: [Function: writeTextFileSync],
//   writeTextFile: [AsyncFunction: writeTextFile],
//   test: [Function: test],
//   core: {
//     print: [Function],
//     recv: [Function],
//     send: [Function],
//     setMacrotaskCallback: [Function],
//     evalContext: [Function],
//     formatError: [Function],
//     encode: [Function],
//     decode: [Function],
//     getPromiseDetails: [Function],
//     shared: SharedArrayBuffer {},
//     setAsyncHandler: [Function: setAsyncHandler],
//     dispatch: [Function],
//     dispatchByName: [Function: dispatch],
//     ops: [Function: ops],
//     sharedQueue: {
//       MAX_RECORDS: 100,
//       head: [Function: head],
//       numRecords: [Function: numRecords],
//       size: [Function: size],
//       push: [Function: push],
//       reset: [Function: reset],
//       shift: [Function: shift]
//     }
//   },
//   args: [],
//   pid: 1576,
//   noColor: false,
//   Symbol(Deno.internal): {}
// }

function logProps() {
  for (const key in Deno) {
    if (Deno.hasOwnProperty(key)) {
      console.log(key, typeof (Deno as any)[key]);
    }
  }
}

logProps();