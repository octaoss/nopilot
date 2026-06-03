import { Registry } from '../../../../platform/registry/common/platform.js';
import { LifecyclePhase } from '../../../services/lifecycle/common/lifecycle.js';
import { Extensions, IWorkbenchContributionsRegistry } from '../../../common/contributions.js';
import { CopyStatus } from './copyStatus.js';


Registry.as<IWorkbenchContributionsRegistry>(Extensions.Workbench).registerWorkbenchContribution(
	CopyStatus, LifecyclePhase.Restored
);
