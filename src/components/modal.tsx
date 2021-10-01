import {Modal, ModalBody} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import React from "react";
import book from "../interface/book";
interface modal{
    show:boolean;
    modalContent: book;
    onClick?: any;
    onHide?:any;
}


export default function BookModal(props:modal){
    return(
        <Modal show={props.show} onHide={props.onHide}>
            <ModalHeader>
                <span id={"modalTitle"}>{props.modalContent.titel}</span>
                <button className={"btn-close"} onClick={props.onClick} />
            </ModalHeader>
            <ModalBody className={"d-flex container"}>
                <table className={"col"}>
                    <tbody>
                        <tr>
                            <td>Geschrieben von: </td>
                            <td>{props.modalContent.autor_in}</td>
                        </tr>
                        <tr>
                            <td>{props.modalContent.typ === "buch" ? "Gelesen im Jahr: ":"Gehört im Jahr: "}</td>
                            <td>{props.modalContent.jahr}</td>
                        </tr>
                        <tr>
                            <td>Typ:</td>
                            <td>{props.modalContent.typ}</td>
                        </tr>
                    </tbody>
                </table>
            </ModalBody>
        </Modal>
    )
}
