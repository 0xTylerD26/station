import { useMemo } from "react"
import { LCDClient } from "@terra-money/feather.js";
import { useNetwork } from "data/wallet";
import { useIsClassic } from "data/query";

export const useLCDClient = () => {
	const network = useNetwork();
	const isClassic = useIsClassic();

	const lcdClient = useMemo(
		() =>
			new LCDClient({
				"columbus-5": {
					...network,
					lcd: network.lcd,
					chainID: "columbus-5",
					gasAdjustment: 1.75,
					gasPrices: {
						uluna: 0.015,
					},
					prefix: "terra",
				},
			}),
		[network]
	);

	return lcdClient;
};
