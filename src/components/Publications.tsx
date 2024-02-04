import {GenericProps, Publication} from '../common/types';

type Props = GenericProps & {papers: Publication[]}
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
                        <strong>{paper.title}</strong>
                        <a href={`/papers/${paper.file}`} download={paper.file}
                           className={'bg-gray-700 font-semibold text-white inline-flex items-center space-x-2 rounded'}>
                            <i className={'text-sm px-2 py-1 bi bi-download'} />
                        </a>
                    </div>
                </li>);
            })}
        </ul>
    </section>);
}

export {Publications};
