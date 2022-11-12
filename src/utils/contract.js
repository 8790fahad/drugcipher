import { parseNearAmount } from "near-api-js/lib/utils/format";
const GAS = 100000000000000;

// insert drug information
export async function  setDrugInfo({ beneficiary_id = "", token = "", payload = {} }) {
  return window.contract.set_drug(
    {
      payload,
      token: parseNearAmount(token),
      beneficiary_id,
    },
    GAS,
    parseNearAmount(token)
  );
}

// recall Drug here
export async function recallDrug({ drug_id, remark }) {
  await window.contract.recall_drug({
    remark: remark,
    drug_id: drug_id,
  });
}
// get drugs
export async function getDrugs(company_id) {
  let drug = await window.contract.get_drugs();
  return drug.filter((item) => (item.company_id = company_id));
}

// view drug and get token
export async function viewDrug(id, owner, token) {
  await window.contract.view_drug({ id, owner, token: parseNearAmount(token) });
}
