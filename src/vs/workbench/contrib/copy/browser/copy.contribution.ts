import { Registry } from '../../../../platform/registry/common/platform.js';
import { LifecyclePhase } from '../../../..//workbench/services/lifecycle/common/lifecycle.js';
import { Extensions, IWorkbenchContributionsRegistry } from '../../../../workbench/common/contributions.js';
import { copyStatus } from './copyStatus.js';


Registry.as<IWorkbenchContributionsRegistry>(Extensions.Workbench).registerWorkbenchContribution(
	copyStatus, LifecyclePhase.Restored
);
