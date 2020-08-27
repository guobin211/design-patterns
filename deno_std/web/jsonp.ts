interface JSONPOptions {
  host: string;
  path?: string;
  query?: URLSearchParams;
}

function jsonpCallback(response: unknown) {
  console.log(response);
}

// api/user?id=10&callback=jsonpCallback
function JSONP(options: JSONPOptions, callback: (response: unknown) => void) {
  const doc = (window as any).document;
  const script = doc.createElement("script");
  script.src = options.host + options.path + `?callback=${callback.name}`;
  doc.body.appendChild(script);
  script.onload = () => {
    setTimeout(() => {
      script.remove();
    }, 4);
  };
}

JSONP({ host: "http://localhost:3000", path: "/api" }, jsonpCallback);
