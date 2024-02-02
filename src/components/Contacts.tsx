import {GenericProps} from '../common/types';

type Props = GenericProps & {email: string, location: string}
function Contacts(props: Props) {
    const {email, location} = props;
    return(<section>
        <strong className={'text-xl font-medium'}>Contact Details</strong>
        <ul className={'mt-2 mb-10'}>
            <li className={'px-2 mt-1'}>
                <strong className={'mr-1'}>E-mail</strong>
                <a href="mailto:" className={'block'}>{email}</a>
            </li>
            <li className={'px-2 mt-1'}>
                <strong className={'mr-1'}>Location</strong>
                <span className={'block'}>{location}</span>
            </li>
        </ul>
    </section>);
}

export {Contacts};
