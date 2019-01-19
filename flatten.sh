#!/usr/bin/env bash

rm -rf flats/*
./node_modules/.bin/truffle-flattener contracts/token/TvcToken.sol > flats/TvcToken_flat.sol
./node_modules/.bin/truffle-flattener contracts/token/TokenWhitelist.sol > flats/TokenWhitelist_flat.sol
