export default function (url, method, body) {
  const configs = {
    method,
    headers: { "Content-Type": "application/json" },
    if(body) {
      configs.body = body;
    },
  };
  return new Promise((resolve, rej) => {
    fetch(url, configs)
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
}
