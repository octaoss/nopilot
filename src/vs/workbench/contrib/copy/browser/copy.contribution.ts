import { Registry } from 'vs/platform/registry/common/platform';
import { LifecyclePhase } from 'vs/workbench/services/lifecycle/common/lifecycle';
import { Extensions, IWorkbenchContributionsRegistry } from 'vs/workbench/common/contributions';
import { copyStatus } from './copyStatus';


Registry.as<IWorkbenchContributionsRegistry>(Extensions.Workbench).registerWorkbenchContribution(
	copyStatus, LifecyclePhase.Restored
);
