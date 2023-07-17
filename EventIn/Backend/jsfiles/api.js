
function createExpenses(req,res){
    
  res.send("succesfuly created");
}
function getExpenses(req,res){
     res.send("Expense created");
}
function editExpense(req,res){
      
      res.send("Successfully edited");
}
function deleteExpense(req,res){
   
      res.send("deleted ");
}
module.exports={createExpenses,getExpenses,editExpense,deleteExpense};