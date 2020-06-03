import React from 'react';
import CreditCardInformation from './CreditCards';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
export function BuyModalWindow(props) {

  return (
    <Modal id="buy" tabIndex="-1" role="dialog" isOpen={props.showModal} toggle={props.toggle}>
      <div role="document">
          <ModalHeader toggle={props.toggle} className="bg-success text-white">
              Buy Item
          </ModalHeader>
          <ModalBody>
                <CreditCardInformation show={true} operation="Charge" toggle="props.toggle" />
          </ModalBody>
      </div>
    </Modal>
  );
};