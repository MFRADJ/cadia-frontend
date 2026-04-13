import '@testing-library/jest-dom';
import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R;
            toHaveAttribute(attr: string, value?: string): R;
            toHaveValue(value: string | string[] | number): R;
            toBeChecked(): R;
            toBeDisabled(): R;
            toHaveClass(className: string): R;
        }
    }
}
export type { UserEvent };
