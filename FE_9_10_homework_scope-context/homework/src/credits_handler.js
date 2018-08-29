function userCard(index) {
    const taxFee = 0.005;

    let key = index,
        balance = 100,
        transactionLimit = 100,
        transferLog = [];

    function historyLogRecord(amount, type) {
        transferLog.push({
            operationType: type,
            credits: amount,
            operationTime: new Date().toLocaleString()
        })
    }

    return {
        getCardOptions: function() {
            return {
                key,
                balance,
                transactionLimit,
                transferLog
            }
        },
        putCredits: function(amount) {
            const type = 'Received credits';

            balance += amount;
            historyLogRecord(amount, type);
        },
        takeCredits: function(amount) {
            const type = 'Withdrawal of credits';

            if(balance >= amount && transactionLimit >= amount) {
                balance -= amount;
                historyLogRecord(amount, type);
            } else {
                console.log('ERROR, please check your balance or transaction limit')
            } 
        },
        setTransactionLimit: function(amount) {
            const type = 'Transaction limit change';

            transactionLimit = amount;
            historyLogRecord(amount, type);
        },
        transferCredits: function(amount, card) {
            let totalAmount = amount + amount * taxFee;
            if (totalAmount <= balance && amount <= transactionLimit) {
                this.takeCredits(totalAmount);
                card.putCredits(amount);
            } else {
                console.log('ERROR, please check your balance or transaction limit')
            } 
        }
    }
}

function UserAccount(name) {
    this.name = name;
    this.cards = [];
    this.cardLimit = 3;
    
    this.addCard = function() {
        if( this.cards.length < this.cardLimit ) {
            this.cards.push(userCard(this.cards.length + 1))
        } else {
            console.log('card lomit is over')
        }
    };

    this.getCardByKey = function(key) {
        return this.cards[key-1];
    }
}