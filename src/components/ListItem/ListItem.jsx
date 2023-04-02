// import PropTypes from 'prop-types';
// import { deleteContact } from 'redux/contactsSlice';
import { BtnDel } from './ListItem.styled';
// import { useSelector, useDispatch } from "react-redux";


export default function ListItem({ name, number, onDeleteContact }) {
    // const dispatch = useDispatch();

    return (
        <li>
            <span>{name}:</span>
            <span>{number}</span>
            <BtnDel type="button" onClick={onDeleteContact}>Delete</BtnDel>
        </li>
    )
};

// ListItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     deleteContact: PropTypes.func,
// };