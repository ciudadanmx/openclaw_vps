#!/bin/bash
export OPENCLAW_ACPX_LEASE_ID=${1:-"4497782480"}
echo "Iniciando OpenClaw con ID: $OPENCLAW_ACPX_LEASE_ID"
pnpm dev
