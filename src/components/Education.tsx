import {EducationHistory, GenericProps} from '../common/types';

type Props = GenericProps & {history: EducationHistory[]}
function Education(props: Props) {
    const {history} = props;
    return(<section>
        <strong className={'text-xl font-medium'}>Education</strong>
        <ul className={'mt-2 mb-10'}>
            {history.map((data, index) => <li key={index} className={'px-2 mt-1'}>
                <strong className={'mr-1'}>{data.title} ({data.score})</strong>
                <span className={'block'}>{data.years}</span>
                <span className={'block'}>{data.place}</span>
            </li>)}
        </ul>
    </section>);
}

export {Education};
