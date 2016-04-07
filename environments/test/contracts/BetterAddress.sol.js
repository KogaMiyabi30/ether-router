// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"inputs":[],"type":"constructor"}],
    binary: "606060405260606103c88061003e833901809050604051809103906000f060008054600160a060020a03191691909117905560c5806104066000396000f360606040526000808060606036806102ab833901809050604051809103906000f0925060406040519081016040528084815260200160208152602001506000600050600060405180807f676574416e737765722829000000000000000000000000000000000000000000815260200150600b01905060405180910390207c010000000000000000000000000000000000000000000000000000000080910402815260200190815260200160002060005060008201518160000160006101000a815481600160a060020a030219169083021790555060208201518160010160005055905050604051603b806102e1833901809050604051809103906000f0915060406040519081016040528083815260200160208152602001506000600050600060405180807f6d756c7469706c792875696e743235362c75696e743235362900000000000000815260200150601901905060405180910390207c010000000000000000000000000000000000000000000000000000000080910402815260200190815260200160002060005060008201518160000160006101000a815481600160a060020a03021916908302179055506020820151816001016000505590505060405160508061031c833901809050604051809103906000f0905060406040519081016040528082815260200160c08152602001506000600050600060405180807f6765744e756d6265727328290000000000000000000000000000000000000000815260200150600c01905060405180910390207c010000000000000000000000000000000000000000000000000000000080910402815260200190815260200160002060005060008201518160000160006101000a815481600160a060020a030219169083021790555060208201518160010160005055905050505050605c8061036c6000396000f3606060405260268060106000396000f3606060405260e060020a60003504639c16667c8114601a575b005b602a6060908152602090f36060604052602b8060106000396000f3606060405260e060020a6000350463165c4a168114601a575b005b602435600435026060908152602090f3606060405260408060106000396000f3606060405260e060020a600035046389f915f68114601a575b005b600460609081526008608052600f60a052601060c0908152601760e052602a6101005290f3606060405260e060020a60003504636f68e8d28114601a575b005b600060208190526004358152604090208054600190910154604f9173ffffffffffffffffffffffffffffffffffffffff169082565b6060918252608052604090f360606040523615600a575b6000600080547f6f68e8d20000000000000000000000000000000000000000000000000000000060609081527fffffffff00000000000000000000000000000000000000000000000000000000833516606452829173ffffffffffffffffffffffffffffffffffffffff1690636f68e8d29060849060409060248187876161da5a03f11560025750506040518051602082015190945092909150369082373681018060405282813684600088620f4240f28382016040528382f3",
    unlinked_binary: "606060405260606103c88061003e833901809050604051809103906000f060008054600160a060020a03191691909117905560c5806104066000396000f360606040526000808060606036806102ab833901809050604051809103906000f0925060406040519081016040528084815260200160208152602001506000600050600060405180807f676574416e737765722829000000000000000000000000000000000000000000815260200150600b01905060405180910390207c010000000000000000000000000000000000000000000000000000000080910402815260200190815260200160002060005060008201518160000160006101000a815481600160a060020a030219169083021790555060208201518160010160005055905050604051603b806102e1833901809050604051809103906000f0915060406040519081016040528083815260200160208152602001506000600050600060405180807f6d756c7469706c792875696e743235362c75696e743235362900000000000000815260200150601901905060405180910390207c010000000000000000000000000000000000000000000000000000000080910402815260200190815260200160002060005060008201518160000160006101000a815481600160a060020a03021916908302179055506020820151816001016000505590505060405160508061031c833901809050604051809103906000f0905060406040519081016040528082815260200160c08152602001506000600050600060405180807f6765744e756d6265727328290000000000000000000000000000000000000000815260200150600c01905060405180910390207c010000000000000000000000000000000000000000000000000000000080910402815260200190815260200160002060005060008201518160000160006101000a815481600160a060020a030219169083021790555060208201518160010160005055905050505050605c8061036c6000396000f3606060405260268060106000396000f3606060405260e060020a60003504639c16667c8114601a575b005b602a6060908152602090f36060604052602b8060106000396000f3606060405260e060020a6000350463165c4a168114601a575b005b602435600435026060908152602090f3606060405260408060106000396000f3606060405260e060020a600035046389f915f68114601a575b005b600460609081526008608052600f60a052601060c0908152601760e052602a6101005290f3606060405260e060020a60003504636f68e8d28114601a575b005b600060208190526004358152604090208054600190910154604f9173ffffffffffffffffffffffffffffffffffffffff169082565b6060918252608052604090f360606040523615600a575b6000600080547f6f68e8d20000000000000000000000000000000000000000000000000000000060609081527fffffffff00000000000000000000000000000000000000000000000000000000833516606452829173ffffffffffffffffffffffffffffffffffffffff1690636f68e8d29060849060409060248187876161da5a03f11560025750506040518051602082015190945092909150369082373681018060405282813684600088620f4240f28382016040528382f3",
    address: "0x7bce795c6203def96f418cd06185e060bfdb0818",
    generated_with: "2.0.6",
    contract_name: "BetterAddress"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("BetterAddress error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("BetterAddress error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("BetterAddress error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("BetterAddress error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.BetterAddress = Contract;
  }

})();
