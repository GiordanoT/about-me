import {GenericProps} from '../common/types';

type Props = GenericProps & {text: string}
function About(props: Props) {
    const {text} = props;
    return(<section>
        <h2 className={'text-2xl pb-1 border-b font-semibold'}>About</h2>
        <p className={'mt-4 text-s'}>{text}</p>
    </section>);
}

export {About};
