import {GenericProps} from '../common/types';

type Props = GenericProps & {topics: string[]};
function Skills(props: Props) {
    const {topics} = props;
    return(<section>
        <strong className={'text-xl font-medium'}>Main Skills</strong>
        <ul className={'mt-2 mb-10'}>
            {topics.map((topic, index) => <li key={index} className={'px-2 mt-1'}>
                <img src={`https://img.shields.io/badge/${topic}-white?style=for-the-badge&logo=${topic}`}
                     alt={topic} />
            </li>)}
        </ul>
    </section>);
}

export {Skills};
