import React from 'react';
import PxpForm, { ConfigFormInterface } from 'pxp-form';
import Topbar from '../../component/Topbar';

const config: ConfigFormInterface = {
  name: 'pxp form',
  attributes: {
    field1: {
      type: 'TextField',
      name: 'filed1',
      label: 'field 1',
      gridForm: {
        xs: 6,
        sm: 6,
      },
      variant: 'outlined',
    },
    field2: {
      type: 'TextField',
      name: 'filed1',
      label: 'field 2',
      gridForm: {
        xs: 6,
        sm: 6,
      },
      variant: 'outlined',
    },
    actionId: {
      type: 'AutoComplete',
      name: 'customerId',
      label: 'Customer',
      size: 'small',
      variant: 'outlined',
      helperText: 'Action ..',
      gridForm: { xs: 6, sm: 6 },
      options: [
        { value: 'Y', label: 'Yes' },
        { value: 'N', label: 'No' },
      ],
      store: {
        axios: {
          method: 'get',
          url: 'test-nd/customers/list',
          typeData: 'QUERY_STRING',
          data: {
            start: 0,
            limit: 10,
            sort: 'customer_id',
            dir: 'ASC',
          },
          headers: {},
        },
        dataReader: {
          dataRows: 'data',
        },
        filterConfig: {
          filterName: 'genericFilterFields',
          filterValue: 'genericFilterFields',
          parFilters: 'name',
        },
        load: true,
        minChars: 2,
        isSearchable: true,
        idDD: 'customer_id',
        descDD: 'name',
      },
      // variant: 'outlined'
    },
  },
  submit: {
    onSubmit: (states) => {
      console.log(states);
    },
  },
};

const form = () => {
  return (
    <div>
      <Topbar />
      <div className="information">
        <div className="title" />
        <p className="text">
          Autocomplete Material-UI doesnt provide a high-level API for solving
          this problem. You are encouraged you to explore the solutions the
          React community has built. In the future, we will look into providing
          a simple component to solve the simple use cases: #9997.
        </p>
      </div>
      <PxpForm config={config} />
    </div>
  );
};

export default form;
