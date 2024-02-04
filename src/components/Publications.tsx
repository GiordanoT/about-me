import {GenericProps, Publication} from '../common/types';

type Props = GenericProps & {papers: Publication[]};
function Publications(props: Props) {
    const {papers} = props;
    return(<section>
        <h2 className={'text-2xl mt-6 pb-1 border-b font-semibold'}>Publications</h2>
        <ul className={'mt-1'}>
            {papers.map((paper, index) => {
                return(<li key={index} className={'py-2'}>
                    <label className={'bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded'}>
                        {paper.place} {paper.year}
                    </label>
                    <div className={'flex justify-between mt-2'}>
                        <strong className={'my-auto'}>{paper.title}</strong>
                        <a href={`https://github.com/GiordanoT/about-me/blob/build/papers/${paper.file}`} target={'_blank'} rel={'noreferrer'}
                           className={'bg-gray-700 p-2 text-white inline-flex items-center space-x-2 rounded text-xs'}>
                            View
                        </a>
                    </div>
                </li>);
            })}
        </ul>
    </section>);
}

export {Publications};
