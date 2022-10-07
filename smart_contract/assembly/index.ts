import { PersistentUnorderedMap } from "near-sdk-as";
import { listedDrug, Drug, drugEntries, DrugListEntries } from "./model";
import { ContractPromiseBatch, context } from "near-sdk-as";
export const products = new PersistentUnorderedMap<string, string>("PRODUCTS");

// purchase the drugs function
export function setDrug(drug: Drug, receive_date: string): void {
  let storeDrug = listedDrug.get(drug.drug_code);
  if (
    storeDrug !== null &&
    storeDrug.supplier_name === drug.supplier_name &&
    storeDrug.expiry_date &&
    storeDrug.drug_code === drug.drug_code
  ) {
    Drug.updateDrugSellingPrice(drug.drug_code, drug.selling_price);
    drug.increaseDrug(drug.balance, storeDrug.drug_code);
    const drugEnt: DrugListEntries = {
      receive_date: receive_date,
      drug_name: drug.drug_name,
      qty_in: drug.balance,
      qty_out: 0,
      drug_code: drug.drug_code,
      expiry_date: drug.expiry_date,
      selling_price: drug.selling_price,
      insert_time: drug.insert_time,
      owner: drug.owner,
    };
    drugEntries.set(drug.insert_time, DrugListEntries.fromPayload(drugEnt));
  }
  listedDrug.set(drug.drug_code, Drug.fromPayload(drug));
  const drugEnt: DrugListEntries = {
    receive_date: receive_date,
    drug_name: drug.drug_name,
    qty_in: drug.balance,
    qty_out: 0,
    drug_code: drug.drug_code,
    expiry_date: drug.expiry_date,
    selling_price: drug.selling_price,
    insert_time: drug.insert_time,
    owner: drug.owner,
  };
  drugEntries.set(drug.insert_time, DrugListEntries.fromPayload(drugEnt));
}

// get all the drug purchase
export function getDrugList(): Drug[] {
  return listedDrug.values();
}

// get particular drugs
export function getDrug(drug_code: string): Drug | null {
  return listedDrug.get(drug_code);
}

// update the drug price
export function updateDrugPrice(drug_code: string, new_price: u64): void {
  Drug.updateDrugSellingPrice(drug_code, new_price);
}

// sell the drug
export function buyDrug(drug: Drug, receive_date: string, qty: u32): void {
  const _drug = getDrug(drug.drug_code);
  if (_drug == null) {
    throw new Error("product not found");
  } else {
    // transfer near from buyer to seller
    // ContractPromiseBatch.create(_drug.owner).transfer(context.attachedDeposit);
    // if (_drug.selling_price.toString() != context.attachedDeposit.toString()) {
    //   throw new Error("attached deposit should equal to the product's price");
    // } else {
      // update the balance available
      _drug.decreaseDrug(qty, drug.drug_code);
      // insert into drug entries
      const drugEnt: DrugListEntries = {
        receive_date: receive_date,
        drug_name: drug.drug_name,
        qty_in: 0,
        qty_out: qty,
        drug_code: drug.drug_code,
        expiry_date: drug.expiry_date,
        selling_price: drug.selling_price,
        insert_time: drug.insert_time,
        owner: drug.owner,
      };
      drugEntries.set(drug.insert_time, DrugListEntries.fromPayload(drugEnt));
    }
  // }
}

// view drug history
export function viewDrugHistory(): DrugListEntries[] | null {
  return drugEntries.values();
}
