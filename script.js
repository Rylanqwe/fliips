document.getElementById("my-button").addEventListener("click", function() {
  document.getElementById("my-text").innerHTML = "Button was clicked!";
});
document.getElementById("my-button").addEventListener("click", function() {
  document.getElementById("my-element").style.backgroundColor = "red";
});
def handle_bet(user_bet):
    outcome = random.randint(0, 1)
    if user_bet == outcome:
        return "win"
    else:
        return "lose"
def validate_bet(user_bet, user_balance):
    if user_bet > user_balance:
        return "Insufficient balance"
    elif user_bet <= 0:
        return "Invalid bet amount"
    else:
        return "Valid"
def store_result(user_address, bet_amount, outcome, payout):
    new_result = BetResult(user_address=user_address, bet_amount=bet_amount, outcome=outcome, payout=payout)
    db.session.add(new_result)
    db.session.commit()
