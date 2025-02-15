import * as fhir from '../fhir.js';
import { ReportParticipantTypeCodeType } from '../fhirValueSets/ReportParticipantTypeCodes.js';
import { ReportActionResultCodeType } from '../fhirValueSets/ReportActionResultCodes.js';
import { ReportStatusCodeType } from '../fhirValueSets/ReportStatusCodes.js';
import { ReportResultCodeType } from '../fhirValueSets/ReportResultCodes.js';
/**
 * Valid arguments for the TestReportParticipant type.
 */
export interface TestReportParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * The type of participant.
     */
    type: fhir.FhirCode<ReportParticipantTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.participant.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.participant.uri
     */
    _uri?: fhir.FhirElementArgs;
    /**
     * The display name of the participant.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.participant.display
     */
    _display?: fhir.FhirElementArgs;
}
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export declare class TestReportParticipant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of participant.
     */
    type: fhir.FhirCode<ReportParticipantTypeCodeType> | null;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri: fhir.FhirUri | null;
    /**
     * The display name of the participant.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Default constructor for TestReportParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReportSetupActionOperation type.
 */
export interface TestReportSetupActionOperationArgs extends fhir.BackboneElementArgs {
    /**
     * The result of this operation.
     */
    result: fhir.FhirCode<ReportActionResultCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.result
     */
    _result?: fhir.FhirElementArgs;
    /**
     * An explanatory message associated with the result.
     */
    message?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.message
     */
    _message?: fhir.FhirElementArgs;
    /**
     * A link to further details on the result.
     */
    detail?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.detail
     */
    _detail?: fhir.FhirElementArgs;
}
/**
 * The operation performed.
 */
export declare class TestReportSetupActionOperation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The result of this operation.
     */
    result: fhir.FhirCode<ReportActionResultCodeType> | null;
    /**
     * An explanatory message associated with the result.
     */
    message?: fhir.FhirMarkdown | undefined;
    /**
     * A link to further details on the result.
     */
    detail?: fhir.FhirUri | undefined;
    /**
     * Default constructor for TestReportSetupActionOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportSetupActionOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReportSetupActionAssert type.
 */
export interface TestReportSetupActionAssertArgs extends fhir.BackboneElementArgs {
    /**
     * The result of this assertion.
     */
    result: fhir.FhirCode<ReportActionResultCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.result
     */
    _result?: fhir.FhirElementArgs;
    /**
     * An explanatory message associated with the result.
     */
    message?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.message
     */
    _message?: fhir.FhirElementArgs;
    /**
     * A link to further details on the result.
     */
    detail?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.detail
     */
    _detail?: fhir.FhirElementArgs;
}
/**
 * The results of the assertion performed on the previous operations.
 */
export declare class TestReportSetupActionAssert extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The result of this assertion.
     */
    result: fhir.FhirCode<ReportActionResultCodeType> | null;
    /**
     * An explanatory message associated with the result.
     */
    message?: fhir.FhirMarkdown | undefined;
    /**
     * A link to further details on the result.
     */
    detail?: fhir.FhirString | undefined;
    /**
     * Default constructor for TestReportSetupActionAssert - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportSetupActionAssertArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReportSetupAction type.
 */
export interface TestReportSetupActionArgs extends fhir.BackboneElementArgs {
    /**
     * The operation performed.
     */
    operation?: fhir.TestReportSetupActionOperationArgs | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssertArgs | undefined;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportSetupAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The operation performed.
     */
    operation?: fhir.TestReportSetupActionOperation | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssert | undefined;
    /**
     * Default constructor for TestReportSetupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportSetupActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReportSetup type.
 */
export interface TestReportSetupArgs extends fhir.BackboneElementArgs {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportSetupActionArgs[] | null;
}
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export declare class TestReportSetup extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportSetupAction[];
    /**
     * Default constructor for TestReportSetup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportSetupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReportTestAction type.
 */
export interface TestReportTestActionArgs extends fhir.BackboneElementArgs {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestReportSetupActionOperationArgs | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssertArgs | undefined;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportTestAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestReportSetupActionOperation | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssert | undefined;
    /**
     * Default constructor for TestReportTestAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportTestActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReportTest type.
 */
export interface TestReportTestArgs extends fhir.BackboneElementArgs {
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.test.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.test.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportTestActionArgs[] | null;
}
/**
 * A test executed from the test script.
 */
export declare class TestReportTest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: fhir.FhirString | undefined;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportTestAction[];
    /**
     * Default constructor for TestReportTest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportTestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReportTeardownAction type.
 */
export interface TestReportTeardownActionArgs extends fhir.BackboneElementArgs {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestReportSetupActionOperationArgs | null;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportTeardownAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestReportSetupActionOperation | null;
    /**
     * Default constructor for TestReportTeardownAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportTeardownActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReportTeardown type.
 */
export interface TestReportTeardownArgs extends fhir.BackboneElementArgs {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportTeardownActionArgs[] | null;
}
/**
 * The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).
 */
export declare class TestReportTeardown extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportTeardownAction[];
    /**
     * Default constructor for TestReportTeardown - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportTeardownArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestReport type.
 */
export interface TestReportArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "TestReport" | undefined;
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Not expected to be globally unique.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ReportStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript: fhir.ReferenceArgs | null;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result: fhir.FhirCode<ReportResultCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.result
     */
    _result?: fhir.FhirElementArgs;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: TestReport.score
     */
    _score?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.tester
     */
    _tester?: fhir.FhirElementArgs;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: TestReport.issued
     */
    _issued?: fhir.FhirElementArgs;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: fhir.TestReportParticipantArgs[] | undefined;
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhir.TestReportSetupArgs | undefined;
    /**
     * A test executed from the test script.
     */
    test?: fhir.TestReportTestArgs[] | undefined;
    /**
     * The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).
     */
    teardown?: fhir.TestReportTeardownArgs | undefined;
}
/**
 * A summary of information based on the results of executing a TestScript.
 */
export declare class TestReport extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "TestReport";
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Not expected to be globally unique.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ReportStatusCodeType> | null;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript: fhir.Reference | null;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result: fhir.FhirCode<ReportResultCodeType> | null;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: fhir.FhirDecimal | undefined;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: fhir.FhirString | undefined;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: fhir.FhirDateTime | undefined;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant: fhir.TestReportParticipant[];
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhir.TestReportSetup | undefined;
    /**
     * A test executed from the test script.
     */
    test: fhir.TestReportTest[];
    /**
     * The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).
     */
    teardown?: fhir.TestReportTeardown | undefined;
    /**
     * Default constructor for TestReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestReportArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=TestReport.d.ts.map