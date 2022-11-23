import { parseNearAmount } from "near-api-js/lib/utils/format";
const GAS = 100000000000000;

// insert drug information
export async function setDrugInfo({
  beneficiary_id = "",
  token = "",
  data = {},
}) {
  return window.contract.set_drug_info(
    {
      payload: data,
      token: parseNearAmount(token + ""),
      beneficiary_id: beneficiary_id,
    },
    GAS,
    parseNearAmount(token + "")
  );
}

// recall Drug here
export async function recallDrug({ drug_id, remark }) {
  await window.contract.recall_drug_fun({
    remark: remark,
    drug_id: drug_id,
  });
}
// get drugs
export async function getDrugs() {
  let drug = await window.contract.get_drugs_info();
  return drug;
}

// view drug and get token
export async function viewDrug(id, owner, token) {
  await window.contract.view_drug_info({
    id,
    owner,
    token: parseNearAmount(token),
  });
}

// view drug and get token
export async function deleteDrugInfo(id) {
  await window.contract.delete_drug_info({
    id,
  });
}
