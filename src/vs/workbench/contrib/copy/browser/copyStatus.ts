import { Disposable } from 'vs/base/common/lifecycle';
import { IStatusbarService, StatusbarAlignment } from 'vs/workbench/services/statusbar/browser/statusbar'


export class copyStatus extends Disposable {

	constructor(@IStatusbarService statusbarService: IStatusbarService) {
		super();

		statusbarService.addEntry(
			{
				name: "Copyright",
				text: "Copyright (c) 2026 Yohanes Oktanio. All Rights Reserved.",
				tooltip: "Kukasih Copyright Jier Jangan Di Hapus Awokwokwok",
				ariaLabel: "Copyright"
			},
			"copy.status",
			StatusbarAlignment.LEFT
		)
	}

}
