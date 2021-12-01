/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
import PxpTable, { ConfigTableInterface } from 'pxp-table';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

const tableConfig: ConfigTableInterface = {
  name: 'table',
  title: 'table',
  columns: {
    name: {
      label: 'Name',
      search: true,
      filterParameterToSearch: 'name',
      renderColumn: ({ row, column }) => {
        return (
          <>
            <div>
              <Typography
                color="primary"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  alert('edit this table');
                }}
              >
                {row.name}
              </Typography>
              Type: {row.type} Code: {row.code}
            </div>
          </>
        );
      },
      formAttribute: {
        type: 'TextField',
        name: 'name',
        label: 'name',
        size: 'small',
        variant: 'outlined',
        helperText: '',
        gridForm: { xs: 6, sm: 6 },
        edit: true,
        add: true,
      },
    },

    phone: {
      label: 'Phone',
      formAttribute: {
        type: 'TextField',
        name: 'phone',
        label: 'Type',
        size: 'small',
        variant: 'outlined',
        helperText: '',
        gridForm: { xs: 6, sm: 6 },
        options: [
          { value: '', label: '' },
          { value: 'customers', label: 'phone' },
        ],
        edit: true,
        add: true,
      },
    },
    direction: {
      label: 'Direction',
      formAttribute: {
        type: 'Dropdown',
        name: 'lastName',
        label: 'Type',
        size: 'small',
        variant: 'outlined',
        helperText: '',
        gridForm: { xs: 6, sm: 6 },
        options: [
          { value: '', label: '' },
          { value: 'customers', label: 'customers' },
        ],
        edit: true,
        add: true,
      },
    },
  },
  store: {
    type: 'remote',
    getDataConfig: {
      doRequest: {
        method: 'get',
        url: 'library-nd/customers/list',
        typeData: 'QUERY_STRING',
        data: {
          start: 0,
          limit: 10,
          sort: 'name',
          dir: 'ASC',
        },
        headers: {
          Authorization: '',
        },
      },
      load: true,
    },
    dataReader: {
      dataRows: 'data',
    },
    storeId: 'customerId',
  },
  filterConfig: {
    filterName: 'genericFilterFields',
    filterValue: 'genericFilterValue',
  },
  actionsInToolBar: {
    createFlow: {
      label: 'Create Flow',
      onClick: (row) => {
        alert('asdas');
      },
      icon: <AddIcon color="primary" />,
      disabled: false,
    },
  },
  actionsInCell: {
    edit: {
      label: 'Edit',
      onClick: (row) => {
        console.log('row', row.name);
      },
      icon: <EditIcon />,
      disabled: false,
    },
    duplicate: {
      label: 'Duplicate',
      onClick: (row) => {
        console.log('row', row.name);
        alert('go to flow');
      },
      icon: <FileCopyIcon />,
      disabled: false,
    },
    goToFlow: {
      label: 'Go to flow',
      onClick: (row) => {
        console.log('row', row.name);
        alert('go to flow');
      },
      icon: <NavigateNextIcon />,
      disabled: false,
    },
  },
  form: {
    add: {
      name: 'add',
      submit: {
        onSubmit: {
          url: `${process.env.REACT_APP_REQUEST_PXP_ND}test-nd/customers/add`,
          method: 'post',
          headers: {
            Authorization: '',
          },
          extraParams: {
            vendorId: 1,
            enabled: 'Y',
          },
        },
      },
    },
    edit: {
      name: 'edit',
      submit: {
        onSubmit: (states: any) => {
          console.log('edit', states);
        },
      },
    },
    extraAttributes: {
      enabled: {
        type: 'Dropdown',
        name: 'enabled',
        label: 'enabled?',
        size: 'small',
        variant: 'outlined',
        helperText: '',
        gridForm: { xs: 6, sm: 6 },
        options: [
          { value: 'Y', label: 'Yes' },
          { value: 'N', label: 'No' },
        ],
        add: false,
        edit: true,
      },
    },
  },
};

const table = () => {
  return (
    <div>
      <PxpTable config={tableConfig} />
    </div>
  );
};

export default table;
