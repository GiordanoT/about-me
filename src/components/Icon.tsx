import {GenericProps} from '../common/types';

type Props = GenericProps & {viewBox: string, path: string};
function Icon(props: Props) {
    const {className, viewBox, path} = props;

    return(<svg className={className || ''} role={'img'}
                viewBox={viewBox} xmlns={'http://www.w3.org/2000/svg'}>
        <g><path d={path}></path></g>
    </svg>)
}
export {Icon};
