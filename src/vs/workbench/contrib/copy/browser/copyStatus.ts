import { Disposable } from '../../../../base/common/lifecycle.js';
import { IStatusbarService, StatusbarAlignment } from '../../../services/statusbar/browser/statusbar.js';


export class CopyStatus extends Disposable {

	constructor(@IStatusbarService statusbarService: IStatusbarService) {
		super();

		statusbarService.addEntry(
			{
				name: 'Copyright',
				text: 'Copyright (c) 2026 Yohanes Oktanio. All Rights Reserved.',
				tooltip: 'Kukasih Copyright Jier Jangan Di Hapus Awokwokwok',
				ariaLabel: 'System Components'
			},
			'copy.status',
			StatusbarAlignment.LEFT
		);
	}

}
