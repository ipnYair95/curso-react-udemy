import { addHours, differenceInSeconds } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import Modal from "react-modal"
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useCalendarStore, useUiStore } from "../../hooks";

registerLocale('es', es);


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const { activeEvent, startSavingEvent } = useCalendarStore();

    const { closeDateModal } = useUiStore();

    const { isDateModalOpen } = useUiStore();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)
    })

    const titleClass = useMemo(() => {

        if (!formSubmitted) return '';

        return (formValues.title.trim().length > 0)
            ? ''
            : 'is-invalid';

    }, [formValues.title, formSubmitted])


    useEffect(() => {

        if (activeEvent !== null) {
            setFormValues({ ...activeEvent });
        }

    }, [activeEvent])

    const onCloseModal = () => {
        closeDateModal();
    }

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChange = (event, changing) => {

        setFormValues({
            ...formValues,
            [changing]: event
        })

    }

    const onSubmit = async (event) => {

        event.preventDefault();

        setFormSubmitted(true);

        const difference = differenceInSeconds(formValues.end, formValues.start);

        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Error', 'La fecha fin debe ser mayor a la de inicio', 'error');
            return;
        }

        if (formValues.title.trim().length <= 0) {
            return;
        }

        await startSavingEvent(formValues);

        closeDateModal();

        setFormSubmitted(false);

    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className={"modal"}
            overlayClassName={"modal-fondo"}
            closeTimeoutMS={200}
        >

            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit} >

                <div className="form-group mb-2 d-flex gap-2 flex-column">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formValues.start}
                        className="form-control"
                        onChange={(event) => onDateChange(event, 'start')}
                        dateFormat='Pp'
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>

                <div className="form-group mb-2 d-flex gap-2 flex-column">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        selected={formValues.end}
                        className="form-control"
                        onChange={(event) => onDateChange(event, 'end')}
                        dateFormat='Pp'
                        minDate={formValues.start}
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
