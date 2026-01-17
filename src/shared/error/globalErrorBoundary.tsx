import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen items-center justify-center">
          <p className="text-lg font-medium">문제가 발생했습니다. 다시 시도해주세요.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
