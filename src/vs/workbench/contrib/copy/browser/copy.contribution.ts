import { Registry } from 'vs/platform/registry/common/platform';
import { LifecyclePhase } from 'vs/workbench/services/lifecycle/common/lifecycle';
import { Extensions, IWorkbenchContributionsRegistry } from 'vs/workbench/common/contributions';
import { CopyStatus } from './copyStatus.js';


Registry.as<IWorkbenchContributionsRegistry>(Extensions.Workbench).registerWorkbenchContribution(
	CopyStatus, LifecyclePhase.Restored
);

