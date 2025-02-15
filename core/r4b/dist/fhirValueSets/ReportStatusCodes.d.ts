/**
 * The current status of the test report.
 */
export declare const ReportStatusCodes: {
    /**
     * completed: All test operations have completed.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: This test report was entered or created in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * in-progress: A test operations is currently executing.
     */
    readonly InProgress: "in-progress";
    /**
     * stopped: The test script execution was manually stopped.
     */
    readonly Stopped: "stopped";
    /**
     * waiting: A test operation is waiting for an external client request.
     */
    readonly Waiting: "waiting";
};
/**
 * The current status of the test report.
 */
export declare type ReportStatusCodeType = typeof ReportStatusCodes[keyof typeof ReportStatusCodes];
//# sourceMappingURL=ReportStatusCodes.d.ts.map