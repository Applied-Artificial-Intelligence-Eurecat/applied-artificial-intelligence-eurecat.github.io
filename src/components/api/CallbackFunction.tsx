export type CallbackFunction = (a: any) => void;
export type FetchFunction = () => Promise<void>;

export function FetchAPI(uri: string, callback: CallbackFunction): FetchFunction {
  return async () => {
    fetch(uri, { method: "GET" }).then((response) => response.json()).then((response) => {
      callback(response);
    }).catch((err) => {
      console.log(err);
    });
  };
}
