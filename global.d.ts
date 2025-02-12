interface Window {
	Telegram: {
		WebApp: {
			initData?: string;
			initDataUnsafe?: any;
			close: () => void;
			expand: () => void;
			sendData: (data: string) => void;
			onEvent: (event: string, callback: () => void) => void;
			offEvent: (event: string, callback: () => void) => void;
			isExpanded?: boolean;
			platform?: string;
		};
	};
}