<template>
  <mdb-container>
    <!-- trigger modal button -->
    <mdb-btn color="default" class="mb-3 mr-5" @click="cart = true">launch modal</mdb-btn>
    <!-- cart modal -->
    <mdb-modal :show="cart" @close="cart = false" class="text-center">
      <mdb-modal-header>
        <h4 class="modal-title" id="myModalLabel">Your cart</h4>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-tbl hover>
          <mdb-tbl-head>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Remove</th>
              </tr>
            </mdb-tbl-head>
            <tbl-body>
              <tr>
                <th scope="row">1</th>
                <td>Product 1</td>
                <td>100$</td>
                <td><a><mdb-icon icon="times"/></a></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Product 2</td>
                <td>100$</td>
                <td><a><mdb-icon icon="times"/></a></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Product 3</td>
                <td>100$</td>
                <td><a><mdb-icon icon="times"/></a></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Product 4</td>
                <td>100$</td>
                <td><a><mdb-icon icon="times"/></a></td>
              </tr>
              <tr class="total">
                <th scope="row">5</th>
                <td>Total</td>
                <td>400$</td>
                <td></td>
              </tr>
            </tbl-body>
        </mdb-tbl>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="primary" @click="cart = false">Close</mdb-btn>
        <mdb-btn color="primary" @click="cart = false">Checkout</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbTable, mdbTblHead, mdbTblBody } from 'mdbvue';
  export default {
    name: 'ModalExamplesPage',
    components: {
      mdbContainer,
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter,
      // eslint-disable-next-line vue/no-unused-components
      mdbTable,
      mdbTblHead,
      // eslint-disable-next-line vue/no-unused-components
      mdbTblBody
    },
    data() {
      return {
        cart: false,
      }
    }
  }
</script>