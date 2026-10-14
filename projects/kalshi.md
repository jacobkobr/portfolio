# Prediction Market Inefficiency Research

I wanted to find out whether Kalshi's 15-minute Bitcoin contracts were being mispriced in a way I could actually measure. I didn't have a strategy when I started, so the first thing I built was a recorder. The backtester, paper-trading engine, and live executor came later.

## How it works

Two recorders save the market data and the CF Benchmarks Bitcoin index into **SQLite**. A **Python asyncio** service keeps the order book in memory, runs the strategy, and sends orders. **FastAPI** serves the dashboard.

Every signal goes into a paper ledger, even if no live order gets sent. That lets me compare what the strategy wanted to do with what actually happened. Before sending an order, the executor checks the exchange status, available funds, and order and session limits.

The backtester replays the recorded markets with spread and fees included. I wanted to test prices I could realistically have gotten.

## What I learned

The **XGBoost** models looked promising until I compared them with the market price. The price alone did slightly better on the held-out data. The models weren't finding anything the market didn't already know, so I stopped using them and moved to a simpler rule based on how the contracts settle.

The full write-up covers those experiments and what happened in live trading, including a recorder that stopped receiving data even though its connection still looked healthy.

## Research report

[Building an Automated Prediction Market Trading System](../docs/prediction_markets.html)
