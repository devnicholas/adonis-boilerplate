import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.css";
import languagePT from "datatables.net-plugins/i18n/pt-BR.mjs";

new DataTable(".data-table", {
  language: languagePT,
});