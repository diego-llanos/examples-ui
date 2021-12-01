import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flex: 4,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
  }),
);

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> code fuente </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <pre>
              <code>
                {`
          const Table = () => {
            const jsonTable = {
              idStore: 'tableId',
              buttonDel: true,
              buttonNew: true,
              buttonEdit: true,
              dataReader: {
                dataRows: 'data',
                total: 'count',
              },
              columns: {
                test1: {
                  type: 'TextField',
                  label: 'test 1',
                  gridForm: { xs: 12, sm: 6 },
                  variant: 'outlined',
                },
                test2: {
                  type: 'TextField',
                  label: 'test 2',
                  gridForm: { xs: 12, sm: 6 },
                  variant: 'outlined',
                },
                test3: {
                  type: 'TextField',
                  label: 'test 3',
                  gridForm: { xs: 12, sm: 6 },
                  variant: 'outlined',
                },
              },
              getDataTable: {
                url: 'components/tables/list',
                method: 'GET',
                params: {
                  start: '0',
                  limit: '10',
                  dir: 'DESC',
                  sort: 'tableId',
                },
                load: true,
              },
              onSubmit: {
                urlAdd: 'components/tables/add',
                urlEdit: 'components/tables/edit',
              },
              urlDelete: 'components/tables/delete',
              actionsTableCell: {
                buttonDel: true,
                buttonEdit: true,
              },
                </code>
                `}
              </code>
            </pre>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
