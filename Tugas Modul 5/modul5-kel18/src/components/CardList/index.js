import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function CardList(props) {
  const { contacts, isNameBold } = props;

  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const toggle = (index) => {
    setName(contacts[index].first_name + " " + contacts[index].last_name);
    setImg(contacts[index].avatar);
    setEmail(contacts[index].email);
    setId(contacts[index].id);
    setModal(!modal);
  };

  const close = () => {
    setModal(!modal);
  };

  return (
    <div className="shadow">
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-dialog-centered"
        backdrop={false}
      >
        <ModalHeader toggle={close}>Kelompok {id}</ModalHeader>
        <ModalBody>
          <img src={img} className="w-40 mb-4 mx-auto" alt="avatar" />
          <table className="table">
            <tbody>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>{email}</td>
            </tr>
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={close}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
      <div className="max-w-2x1 mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2x1 font-extrabold tracking-tight text-gray-900">
          Daftar Praktikan RPLBK 2021
        </h2>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <div className="mt-6 grid" key={index}>
              <div className="group relative shadow">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 sm:h-80 lg:aspect-none">
                  <img
                    src={contact.avatar}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    alt="avatar"
                  />
                </div>
                <div className="px-6 pb-6 pt-3 mt-4 flex justify-between">
                  <div>
                    <h3
                      className={`${
                        isNameBold ? "font-bold " : ""
                      } text-sm text-gray-700`}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {contact.first_name} {contact.last_name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {contact.email}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Kelompok: {contact.id}
                  </p>
                </div>
              </div>
              <Button color="info" size="lg" onClick={() => toggle(index)}>
                Detail
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
