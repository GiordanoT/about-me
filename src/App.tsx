import {Data, GenericProps} from './common/types';
import {useEffectOnce} from 'usehooks-ts';
import {useState} from 'react';
import {Contacts, Header, Education, Skills, About, Publications} from './components';

type Props = GenericProps & {};
function App(props: Props) {
  const  [data, setData] = useState<Data|null>(null);
  const [width, setWidth] = useState(0);

  useEffectOnce(() => {
    resize();
    window.addEventListener('resize', resize);
    (async function() {
      const response = await fetch('./data.json');
      if(response.ok) setData(await response.json());
    })();
  });

  const resize = () => setWidth(window.innerWidth);

  if(width < 1000) return(<div className={'p-2'}>This resolution is NOT supported.</div>)
  if(!data) return(<div className={'p-2'}>Loading...</div>)
  return (<main className={'flex justify-center content-center'}>
    <div className={'border border-gray-300 rounded-sm shadow-lg py-8 px-8 w-4/5 mt-8 mb-8'}>
      <Header firstname={data.firstname} lastname={data.lastname} profession={data.profession} />
      <section className={'flex gap-x-10 mt-10'}>
        <div className={'w-2/6'}>
          <Contacts email={data.email} location={data.location} />
          <Education history={data.education} />
          <Skills topics={data.skills} />
        </div>
        <div className={'w-4/6'}>
          <About text={data.about} />
          <Publications papers={data.publications} />
        </div>
      </section>
    </div>
  </main>);

}

export default App;

