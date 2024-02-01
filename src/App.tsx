import {GenericProps} from './common/types';
import {useEffectOnce} from 'usehooks-ts';
import {useState} from "react";

type Props = GenericProps & {};
function App(props: Props) {
  const  [data, setData] = useState<JSON|null>(null);
  useEffectOnce(() => {
    (async function() {
      const response = await fetch('./data.json');
      if(response.ok) setData(await response.json());
    })();
  });

  if(!data) return(<div className={'bg-red-300 p-2'}>Loading...</div>)
  return (<div className={'bg-red-300 p-2'}>
    {JSON.stringify(data)}
  </div>);
}

export default App;
