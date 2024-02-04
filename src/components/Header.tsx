import {GenericProps} from '../common/types';
import {Icon} from './Icon';
import SVG from '../common/SVG';

type Props = GenericProps & {firstname: string, lastname: string, profession: string}
function Header(props: Props) {
    const {firstname, lastname, profession} = props;

    return(<header>
        <ul className={'flex flex-wrap justify-end gap-2'}>
            <li>
                <a href={'https://github.com/GiordanoT'} target={'_blank'} rel={'noreferrer'}
                   className={'bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'}>
                    <Icon className={'w-5 h-5 fill-current'} viewBox={'0 0 24 24'} path={SVG.github} />
                </a>
            </li>
        </ul>
        <div className={'flex justify-between items-center'}>
            <div>
                <div className={'bg-cover bg-no-repeat rounded-full h-52 w-52'}
                     style={{backgroundImage: 'url(https://avatars.githubusercontent.com/u/64309942?v=4)'}}>
                </div>
            </div>
            <div className={'grid justify-items-end'}>
                <h1 className={'text-4xl font-extrabold'}>{firstname.toUpperCase()} {lastname.toUpperCase()}</h1>
                <p className={'text-xl mt-5'}>{profession}</p>
            </div>
        </div>
    </header>)
}
export {Header};
